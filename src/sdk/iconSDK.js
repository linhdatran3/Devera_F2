/* eslint-disable */
import IconService from "icon-sdk-js";
import axios from "axios";
import { ENDPOINT } from "../utils/constant";

const { IconConverter, IconBuilder, IconAmount, HttpProvider } = IconService;
const { IcxTransactionBuilder } = IconBuilder;

export default class Request {
  constructor(id, method, params) {
    this.jsonrpc = "2.0";
    this.id = id;
    this.method = method;
    this.params = params;
  }
}

export const NETWORKS = {
  sejong: {
    name: "Sejong Testnet",
    endpoint: "https://sejong.net.solidwallet.io/api/v3",
    nid: "0x53",
  },
};
const ADDRESS = "address";
//const rawTransaction = 'rawTransaction';

export const httpProvider = new HttpProvider(NETWORKS.sejong.endpoint);

const iconService = new IconService(httpProvider);

export const hashShortener = (hashStr) => {
  if (!hashStr) return "";
  const len = hashStr.length;
  return `${hashStr.substring(0, 6)}...${hashStr.substring(len - 4)}`;
};

export const convertToICX = (balance) => {
  return IconService.IconAmount.of(balance, IconService.IconAmount.Unit.LOOP)
    .convertUnit(IconService.IconAmount.Unit.ICX)
    .toString();
};

export const getBalance = (address) => {
  return iconService
    .getBalance(address || localStorage.getItem("ADDRESS"))
    .execute()
    .then((balance) => {
      return convertToICX(balance);
    });
};

export const disConnect = (setAddress) => {
  sessionStorage.setItem("isConnected", "");
  localStorage.setItem("address", "");
  localStorage.setItem("jwt", "");
  localStorage.setItem("isLoggin", false);
  localStorage.setItem("userId", "");
  localStorage.setItem("role", "");
  setAddress(null);
};
export const connectWallet = async (setAddress) => {
  if (window) {
    const customEvent = new CustomEvent("ICONEX_RELAY_REQUEST", {
      detail: {
        type: "REQUEST_ADDRESS",
      },
    });
    window.dispatchEvent(customEvent);
    const eventHandler = (event) => {
      const { type, payload } = event?.detail;
      if (type === "RESPONSE_ADDRESS") {
        localStorage.setItem(ADDRESS, payload);
        sessionStorage.setItem("isConnected", "connected");
        setAddress(payload); //connect wallet completed!
        //login account
        loginAccount(payload);
      }
    };
    window.addEventListener("ICONEX_RELAY_RESPONSE", eventHandler);
  }
};
const loginAccount = (address) => {
  const connect = sessionStorage.getItem("isConnected");

  //check connect wallet?
  if (connect === "connected") {
    //console.log("connect wallet completed");
    //login account
    axios
      .post(`${ENDPOINT}/auth/local`, {
        walletAddress: address,
      })
      .then((res) => {
        //console.log(res.data);
        localStorage.setItem("isLoggin", true);
        localStorage.setItem("jwt", res.data.jwt);
        localStorage.setItem("userId", res.data.user.id);
        localStorage.setItem("role", res.data.user.role.id);

      })
      .catch((err) => {
        //console.log(address);
        if (err.response.status === 400) {
          //console.log("start create account");
          axios
            .post(`${ENDPOINT}/auth/local/register`, {
              walletAddress: address,
              //users_permissions_role:6 //default - id=6 is customer
            })
            .then((res) => {
              // console.log("create account completed!");
              // console.log(res.data);
              localStorage.setItem("isLoggin", true);
              localStorage.setItem("jwt", res.data.jwt);
              localStorage.setItem("userId", res.data.user.id);
              localStorage.setItem("role", res.data.user.role.id);
              //console.log("connect account completed");
            });
        }
      });
  }
};
export const transfer = (transaction) => {
  const { from, to, value } = transaction;
  // if (!from) {
  //   console.log('Connect wallet first!');
  //   return ;
  // }

  const txObj = new IcxTransactionBuilder()
    .from(from)
    .to(to)
    .value(IconAmount.of(value, IconAmount.Unit.ICX).toLoop())
    .stepLimit(IconConverter.toBigNumber(1000000000))
    .nid(IconConverter.toBigNumber(NETWORKS.sejong.nid))
    .nonce(IconConverter.toBigNumber(1))
    .version(IconConverter.toBigNumber(3))
    .timestamp(new Date().getTime() * 1000)
    .build();
  const rawTxObj = IconConverter.toRawTransaction(txObj);
  const tx = {
    jsonrpc: "2.0",
    method: "icx_sendTransaction",
    params: rawTxObj,
    id: 50889,
  };
  return tx;
};

export const checkRs = async (txHash) => {
  try {
    const transactionResult = await iconService
      .getTransactionResult(txHash)
      .execute();
    if (transactionResult.status === 1) {
      console.log("Done!");
    }
  } catch (error) {}
};

export const signTx = async (transaction) => {
  return new Promise((resolve, reject) => {
    window.dispatchEvent(
      new CustomEvent("ICONEX_RELAY_REQUEST", {
        detail: {
          type: "REQUEST_JSON-RPC",
          payload: transaction,
        },
      })
    );

    window.addEventListener(
      "ICONEX_RELAY_RESPONSE",
      function (event) {
        const type = event.detail.type;
        const payload = event.detail.payload;
        if (type === "RESPONSE_JSON-RPC") {
          resolve(payload);
          console.log("Done");
        }
      },
      { once: true }
    );
  });
};

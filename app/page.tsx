"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import StatsGrid from "@/components/StatsGrid";
import WalletCard from "@/components/WalletCard";
import Footer from "@/components/Footer";
import GasPrice from "../components/GasPrice";

type NetworkInfo = {
  chain: string;
  chainId: number;
  latestBlock: number;
  latency: string;
  status: string;
};

declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string }) => Promise<string[]>;
    };
  }
}

export default function Page() {
  const [acc, setAcc] = useState("");
  const [balance, setBalance] = useState("");
  const [network, setNetwork] = useState<NetworkInfo | null>(null);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAcc(accounts[0]);
    fetchBalance(accounts[0]);
  };

  const fetchBalance = async (address: string) => {
    try {
      setLoading(true);

      const res = await fetch("/api/balance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });

      const data = await res.json();
      setBalance(data.balance);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getNetworkInfo = async () => {
    try {
      const res = await fetch("/api/network");
      const data = await res.json();
      setNetwork(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getNetworkInfo();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Header acc={acc} connectWallet={connectWallet} />

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Network Overview */}
        <section className="border border-[#ffffff20]">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className=" font-semibold text-white">Network Overview</h2>
            <button
              onClick={getNetworkInfo}
              className="text-sm bg-blue-700 p-2 font-medium hover:bg-blue-600"
            >
              Refresh
            </button>
          </div>

          <div className="p-6">
            <StatsGrid network={network} />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 border border-[#ffffff20]">
            <WalletCard
              acc={acc}
              balance={balance}
              loading={loading}
              refresh={() => fetchBalance(acc)}
            />
          </div>

          <GasPrice />
        </section>

        {/* <Footer refresh={getNetworkInfo} /> */}
      </div>
    </div>
  );
}

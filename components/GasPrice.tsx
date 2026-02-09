"use client";

import React, { useEffect, useState } from "react";
import { Fuel, RefreshCw } from "lucide-react";

const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchGasPrice = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/eth/gas");
      const data = await response.json();
      setGasPrice(data.gasPrice);
    } catch (err) {
      console.error("Failed to fetch gas price", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGasPrice();
  }, []);

  return (
    <div className="shadow-sm p-6 w-full max-w-sm border border-[#ffffff20]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-orange-700 text-orange-100">
            <Fuel className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-medium text-white">Gas Price</h3>
        </div>

        <button
          onClick={fetchGasPrice}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
          title="Refresh gas price"
        >
          <RefreshCw
            className={`w-4 h-4 text-gray-500 ${loading ? "animate-spin" : ""}`}
          />
        </button>
      </div>

      <div>
        <p className="text-3xl mt-12 font-semibold text-white">
          {loading ? "…" : gasPrice || "--"}
          <span className="text-lg text-gray-500 ml-1">{"  "}gwei</span>
        </p>
        <p className="text-sm text-gray-400 mt-1">Current average gas price</p>
      </div>
    </div>
  );
};

export default GasPrice;

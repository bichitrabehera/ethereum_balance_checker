import { Copy, ExternalLink, RefreshCw } from "lucide-react";

type WalletCardProps = {
  acc: string;
  balance: string;
  loading: boolean;
  refresh: () => void;
};

export default function WalletCard({
  acc,
  balance,
  loading,
  refresh,
}: WalletCardProps) {
  const copyAddress = () => navigator.clipboard.writeText(acc);

  return (
    <section className="px-6 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Wallet</h2>

        {acc && (
          <button
            onClick={refresh}
            className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh balance
          </button>
        )}
      </div>

      {!acc && (
        <p className="text-lg text-white">
          Connect your wallet to view address and balance.
        </p>
      )}

      {acc && (
        <>
          <div>
            <p className="text-sm text-white mb-2">Address</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 text-white border-[#ffffff20] border px-4 py-2 text-sm break-all">
                {acc}
              </div>

              <button
                onClick={copyAddress}
                className="p-2  border border-[#ffffff20] bg-blue-600 hover:bg-blue-500"
              >
                <Copy className="w-4 h-4" />
              </button>

              <a
                href={`https://sepolia.etherscan.io/address/${acc}`}
                target="_blank"
                className="p-2 border border-[#ffffff20] bg-blue-600 hover:bg-blue-500"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Balance</p>
            <p className="text-3xl font-semibold tracking-tight text-green-600">
              {loading ? "…" : balance || "0.00"}{" "}
              <span className="text-lg text-gray-500">ETH</span>
            </p>
          </div>
        </>
      )}
    </section>
  );
}

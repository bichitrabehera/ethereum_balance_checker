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
    <section className="rounded-xl bg-white border p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-black">Wallet</h2>

        {acc && (
          <button
            onClick={refresh}
            className="inline-flex items-center gap-2 text-lg text-blue-600 hover:text-blue-800"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Refresh balance
          </button>
        )}
      </div>

      {!acc && (
        <p className="text-sm text-gray-500">
          Connect your wallet to view address and balance.
        </p>
      )}

      {acc && (
        <>
          <div>
            <p className="text-sm text-gray-500 mb-2">Address</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 rounded-lg text-black border-gray-600 px-4 py-2 font-mono text-sm break-all">
                {acc}
              </div>

              <button
                onClick={copyAddress}
                className="p-2 rounded-lg border bg-blue-600 hover:bg-blue-500"
              >
                <Copy className="w-4 h-4" />
              </button>

              <a
                href={`https://sepolia.etherscan.io/address/${acc}`}
                target="_blank"
                className="p-2 rounded-lg border bg-blue-600 hover:bg-blue-500"
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

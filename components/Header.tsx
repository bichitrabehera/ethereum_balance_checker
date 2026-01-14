import { Wallet } from "lucide-react";

type HeaderProps = {
  acc: string;
  connectWallet: () => void;
};

export default function Header({ acc, connectWallet }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">ChainView</h1>
          <p className="text-xs text-gray-500">Ethereum · Sepolia Network</p>
        </div>

        {!acc ? (
          <button
            onClick={connectWallet}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                       bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium
                       transition"
          >
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </button>
        ) : (
          <div className="flex items-center gap-3 px-4 py-2 rounded-lg border bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-green-500" />

            <span className="font-mono text-sm text-gray-700">
              Connected
            </span>


          </div>
        )}
      </div>
    </header>
  );
}

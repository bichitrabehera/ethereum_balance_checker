import StatCard from "./StatCard";

type NetworkInfo = {
  chainId: number;
  latestBlock: number;
  status: string;
  latency: string;
  chain: string;
};

export default function StatsGrid({
  network,
}: {
  network: NetworkInfo | null;
}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 gap-6 bg-black">
      <StatCard
        label="Chain"
        value={network?.chain ?? "—"}
        hint="Active network"
      />

      <StatCard
        label="Chain ID"
        value={network?.chainId ?? "—"}
        hint="Sepolia Testnet"
      />

      <StatCard
        label="Latest Block"
        value={network?.latestBlock ?? "—"}
        hint="Synced"
      />

      <StatCard
        label="Latency"
        value={network?.latency ?? "—"}
        hint="RPC response time"
      />

      <StatCard
        label="Network Status"
        value={network?.status ?? "unknown"}
        color={network?.status === "connected" ? "green" : "red"}
        hint="RPC health"
      />
    </section>
  );
}

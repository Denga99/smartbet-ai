export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1 style={{ color: '#4ade80' }}>SmartBet AI</h1>
      <p style={{ fontWeight: 'bold' }}>IDEMO JAKO 💪</p>
      <table style={{ marginTop: 20, width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc' }}>Match</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Tip</th>
            <th style={{ borderBottom: '1px solid #ccc' }}>Confidence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Man City – PSG</td>
            <td>1</td>
            <td>82%</td>
          </tr>
          <tr>
            <td>Roma – Napoli</td>
            <td>GG</td>
            <td>76%</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

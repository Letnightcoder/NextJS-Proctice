export default async function Docs({
  params,
}: {
  params: { slug?: string[] };
}) {
  const { slug } = params;
  if (slug?.length === 2) {
    return (
      <div>
        <h1>
          viewing docs for feature {slug[0]} and concept {slug[1]}
        </h1>
      </div>
    );
  } else if (slug?.length === 1) {
    return (
      <div>
        <h1>viewing docs for feature {slug[0]}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  );
}

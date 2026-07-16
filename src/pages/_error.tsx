import type { NextPageContext } from "next";

function Error({ statusCode }: { statusCode?: number }) {
  return (
    <div style={{ padding: "4rem", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>{statusCode ? `Error ${statusCode}` : "Ha ocurrido un error"}</h1>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

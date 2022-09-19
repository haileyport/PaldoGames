import * as Styled from "./Pagination.style";

export const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Styled.Nav>
        <Styled.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Styled.Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Styled.Button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 && "page"}>
              {i + 1}
            </Styled.Button>
          ))}
        <Styled.Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Styled.Button>
      </Styled.Nav>
    </>
  );
};

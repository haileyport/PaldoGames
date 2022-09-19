import * as Page from './Pagination.style';

export const Pagination = ({ total, limit, page, setPage }) => {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Page.Nav>
        <Page.Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Page.Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Page.Button key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 && 'page'}>
              {i + 1}
            </Page.Button>
          ))}
        <Page.Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Page.Button>
      </Page.Nav>
    </>
  );
};

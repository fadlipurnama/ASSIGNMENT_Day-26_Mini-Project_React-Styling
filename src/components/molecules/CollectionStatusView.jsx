function CollectionStatusView({
  items = [],
  isLoading = false,
  isFetching = false,
  isError = false,
  error,
  loadingText = "Loading data...",
  fetchingText = "Updating data...",
  errorText = "Failed to load data.",
  emptyText = "No items found.",
  renderSkeleton,
  renderItems,
}) {
  const errorMessage = error?.message ?? errorText;

  if (isLoading) {
    return (
      <>
        <p role="status" className="sr-only">
          {loadingText}
        </p>
        {renderSkeleton ? renderSkeleton() : null}
      </>
    );
  }

  if (isError) {
    return (
      <p role="alert" className="text-destructive">
        {errorMessage}
      </p>
    );
  }

  if (items.length === 0) {
    return <p className="text-muted-foreground">{emptyText}</p>;
  }

  return (
    <>
      {isFetching && (
        <p role="status" className="sr-only">
          {fetchingText}
        </p>
      )}
      {renderItems ? renderItems(items) : null}
    </>
  );
}

export default CollectionStatusView;
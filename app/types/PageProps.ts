export type  PageProps = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ mode?: string }>
}
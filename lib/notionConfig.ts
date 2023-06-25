// TODO: change this to the notion ID of the page you want to test
export const rootNotionPageId =
  process.env.NEXT_PUBLIC_NOTION_CONFIG_ROOT_NOTION_PAGE_ID;
// export const rootNotionPageId = 'Hello-World-5d0365ba72cb450e88fcf8a5df7a1cce'

export const isDev =
  process.env.NODE_ENV === "development" || !process.env.NODE_ENV;

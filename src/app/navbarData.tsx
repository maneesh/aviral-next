export interface NavbarItem {
  name: string;
  data: string;
  type?: string;
  isButton?: boolean;
}

interface Section {
  name: string;
  contents: NavbarItem[];
}

export const fetchNavbarData = async (): Promise<NavbarItem[]> => {
  try {
    const domain = 'aviralai.com';
    const page = 'Layout';

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/static?domain=${domain}&page=${encodeURIComponent(page)}`,
      { cache: 'no-store' }
    );

    const data = await res.json();
    const all: Section[] = data?.sections ?? [];

    const navbarContents = all.find((s: Section) => s.name === 'Navbar')?.contents || [];
    return navbarContents;
  } catch (error) {
    return [];
  }
};

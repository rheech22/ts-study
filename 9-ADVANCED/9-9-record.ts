{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  // Page를 key, PageInfo를 value
  const nav: Record<Page, PageInfo> = {
    home: {title: 'Home'},
    about: {title: 'About'},
    contact: {title: 'Contact'}
  }
}

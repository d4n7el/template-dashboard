import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
import { useLocation, useNavigate } from 'react-router-dom';

export const BreadcrumbsAtom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  return (
    <Breadcrumbs
      separator='/'
      onAction={(key) => {
        navigate(`/${key}`);
      }}
    >
      {pathnames.map((item) => (
        <BreadcrumbItem
          key={item}
          classNames={{
            item: ['text-lg capitalize'],
            separator: 'font-bold text-cl-black',
          }}
        >
          {decodeURIComponent(item)}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

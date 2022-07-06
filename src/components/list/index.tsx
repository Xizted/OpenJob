import { useState } from 'react';
import { FlatList } from 'react-native';
import Item from './Item';

const List = () => {
  const [data, setData] = useState([
    {
      title: 'Sr. Golang Back-end Engineer',
      time: 'Full time',
      subtitle: 'ClickIT Smart Technologies Remote',
    },
    {
      title: 'Senior Software Engineer',
      time: 'Full time',
      subtitle: 'Xepelin Remote',
    },
    {
      title: 'Full-Stack Junior (React, Node.js)',
      time: 'Full time',
      subtitle: 'TCITSantiago(temporarily remote)',
    },
    {
      title: 'UX/UI Designer Ssr',
      time: 'Full time',
      subtitle: 'Leniolabs_ Remote(España)',
    },
    {
      title: 'Desarrollador(a) Full-Stack Mobile',
      time: 'Full time',
      subtitle: '3ITforBanco de Chile Remote',
    },
    {
      title: 'Python Developer',
      time: 'Full time',
      subtitle:
        'Leniolabs_ Remote(Argentina; Chile; Colombia; Uruguay; Perú )',
    },
    {
      title: 'Sr. Front-end Engineer (React/ Next.JS)',
      time: 'Full time',
      subtitle: 'Clip Remote',
    },
    {
      title: 'QA Automation Ssr',
      time: 'Full time',
      subtitle: 'Leniolabs_ Remote(Chile; Colombia; Uruguay; Argentina; Perú)',
    },
    {
      title: 'Full-Stack Engineer (Ruby on Rails)',
      time: 'Full time',
      subtitle: 'SecZetta Remote(Chile)',
    },
    {
      title: 'Senior React Engineer',
      time: 'Full time',
      subtitle: 'SecZetta Remote(Chile)',
    },
  ]);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item {...item} />}
    />
  );
};

export default List;

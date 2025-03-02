import { Fragment, useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';

import { TLanguageType } from '../utils';
import { useAppContext } from '../context';

export interface IDataContent {
  text: string;
  title?: string;
}

export interface IContent {
  data: IDataContent[];
  language: TLanguageType;
}

const contents: IContent[] = [
  {
    language: 'en',
    data: [
      {
        text: 'A seasoned Full-stack Developer and Product Designer with over 9 years of experience, I have honed my skills and expertise to craft user-centric, visually stunning, and highly functional solutions.',
      },
      {
        title: 'Front-end Expertise:',
        text: 'As a Front-end Developer specializing in React.js, I thrive in the fast-paced world of front-end development. I enjoy the challenge of bringing static designs to life, creating dynamic and interactive user interfaces. With a keen eye for detail, I ensure that every pixel and element aligns with the design vision, resulting in an engaging and flawless user experience.',
      },
      {
        title: 'Back-end Expertise:',
        text: 'With expertise in both Node.js and .Net C#, I bring a comprehensive understanding of back-end development to the table. I excel in building robust and scalable server-side applications, ensuring seamless integration with front-end systems and optimal performance.',
      },
      {
        title: 'Design Philosophy:',
        text: "My design philosophy revolves around the synergy of form and function. I believe that great design not only looks good but also serves a purpose. Throughout my career, I've strived to strike the perfect balance between aesthetics and usability. Whether it's designing a user-friendly interface or developing a seamless web application, my goal is to make technology accessible and enjoyable for users.",
      },
      {
        title: 'Product Design Excellence:',
        text: "Product design is not just about how it looks but also about how it works. I'm dedicated to enhancing the user journey by conducting in-depth research, user testing, and iterating on designs to deliver products that users love. My focus on user experience (UX) design ensures that every interaction is intuitive, efficient, and memorable.",
      },
      {
        title: 'Tech Stack:',
        text: "My toolkit includes a versatile range of technologies such as React.js, Node.js, .Net C#, Git, SASS, Redux.js, JavaScript, Typescript, and more. I'm well-versed in Docker for efficient containerization, ensuring seamless deployment and scalability.",
      },
      {
        title: 'Continuous Learning:',
        text: "In the ever-evolving tech landscape, I'm committed to staying at the forefront of design and development trends. I consistently expand my knowledge and skills through online courses and workshops. Recently, I've completed courses on topics like UX strategy, usability, and mobile design to keep my skills sharp.",
      },
    ],
  },
  {
    language: 'pt',
    data: [
      {
        text: 'Um experiente Desenvolvedor Full-stack e Designer de Produto com mais de 9 anos de experiência, aprimorei minhas habilidades e expertise para criar soluções centradas no usuário, visualmente impressionantes e altamente funcionais.',
      },
      {
        title: 'Expertise Front-end:',
        text: 'Como Desenvolvedor Front-end especializado em React.js, prospero no mundo dinâmico do desenvolvimento front-end. Gosto do desafio de dar vida a designs estáticos, criando interfaces de usuário dinâmicas e interativas. Com um olhar atento aos detalhes, garanto que cada pixel e elemento esteja alinhado com a visão de design, resultando em uma experiência de usuário envolvente e impecável.',
      },
      {
        title: 'Expertise Back-end:',
        text: 'Com experiência em Node.js e .Net C#, trago uma compreensão abrangente do desenvolvimento back-end para a mesa. Excelo na construção de aplicativos robustos e escaláveis do lado do servidor, garantindo integração perfeita com sistemas front-end e desempenho ideal.',
      },
      {
        title: 'Filosofia de Design:',
        text: 'Minha filosofia de design gira em torno da sinergia entre forma e função. Acredito que um bom design não apenas parece bom, mas também tem um propósito. Ao longo da minha carreira, busquei encontrar o equilíbrio perfeito entre estética e usabilidade. Seja projetando uma interface amigável ao usuário ou desenvolvendo uma aplicação web sem falhas, meu objetivo é tornar a tecnologia acessível e agradável para os usuários.',
      },
      {
        title: 'Excelência em Design de Produto:',
        text: 'O design de produto não se trata apenas de como ele parece, mas também de como funciona. Estou dedicado a aprimorar a jornada do usuário por meio de pesquisas detalhadas, testes de usuário e iterações de design para oferecer produtos que os usuários adorem. Meu foco em design de experiência do usuário (UX) garante que cada interação seja intuitiva, eficiente e memorável.',
      },
      {
        title: 'Tecnologias Utilizadas:',
        text: 'Meu conjunto de ferramentas inclui uma variedade versátil de tecnologias como React.js, Node.js, .Net C#, Git, SASS, Redux.js, JavaScript, Typescript e muito mais. Estou familiarizado com Docker para uma containerização eficiente, garantindo implantação e escalabilidade sem problemas.',
      },
      {
        title: 'Aprendizado Contínuo:',
        text: 'No cenário tecnológico em constante evolução, estou comprometido em permanecer na vanguarda das tendências de design e desenvolvimento. Expando consistentemente meu conhecimento e habilidades por meio de cursos online e workshops. Recentemente, concluí um curso sobre como construir aplicativos de microsserviços com .NET e Next.js, aprimorando ainda mais minha expertise em práticas modernas de desenvolvimento web.',
      },
    ],
  },
];
export const AboutContent = () => {
  const { language } = useAppContext();
  const [content, setContent] = useState<IContent | undefined>(undefined);

  useEffect(() => {
    const contentTest = contents.find((c) => c.language === language);
    setContent(contentTest);
  }, [language]);

  return (
    <Box sx={{ padding: 2 }}>
      {content &&
        content.data.map((d, i) => (
          <Fragment key={i}>
            {d.title && <Typography variant='h6'>{d.title}</Typography>}
            <Typography align='justify'>{d.text}</Typography>
          </Fragment>
        ))}
    </Box>
  );
};

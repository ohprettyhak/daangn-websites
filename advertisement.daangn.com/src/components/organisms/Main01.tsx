import React from "react";
import { styled } from "~/gatsby-theme-stitches/stitches.config";
import { rem } from "polished";
import { StaticImage as Picture } from "gatsby-plugin-image";

type SectionProps = {
  titleBig: string[];
  subtitle: string[];
};

export const Main01: React.FC<SectionProps> = ({ titleBig, subtitle }) => {
  return (
    <Section>
      <Container>
        <Picture
          src="../../image/img_sub_pc_01.png"
          alt="main01"
          imgStyle={{ objectPosition: "top" }}
          height={680}
        />
        <Right>
          <GridRow>
            <TitleBig>{titleBig[0]}</TitleBig>
            <TitleBig>{titleBig[1]}</TitleBig>
          </GridRow>
          <GridRow>
            <Subtitle>{subtitle[0]}</Subtitle>
            <Subtitle>{subtitle[1]}</Subtitle>
          </GridRow>
        </Right>
      </Container>
    </Section>
  );
};

const Section = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "$white",
  paddingTop: rem(30),
  overflow: "hidden",
});

const Container = styled("div", {
  display: "grid",
  paddingX: rem(20),
  gridTemplateRows: "auto 300px",

  "& > :nth-child(1)": {
    order: 2,
  },
  "& > :nth-child(2)": {
    order: 1,
  },

  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "auto",

    "& > :nth-child(1)": {
      order: 1,
    },
    "& > :nth-child(2)": {
      order: 2,
    },
    paddingX: rem(140),
  },
});

const Right = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "@md": {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

const GridRow = styled("div", {
  display: "grid",
  gridTemplateRows: "auto auto",
  alignItems: "center",
  justifyItems: "center",
  marginBottom: rem(12),
  Subtitle: {
    fontSize: "$body2",
    fontWeight: 400,
  },

  "@md": {
    justifyItems: "start",
    marginBottom: rem(20),
  },
});

const TitleBig = styled("p", {
  fontSize: "$subtitle2",
  fontWeight: "bold",

  "@md": {
    fontSize: rem(42),
  },
});

const Subtitle = styled("p", {
  display: "flex",
  fontSize: "$subtitle3",
});

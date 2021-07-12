import styled from "styled-components";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import { AlurakutMenu, OrkutNostalgicIconSet } from "../src/components/lib/Alurakut";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

function ProfileSideBar(props) {
  return (
    <Box>
      <img
        src={`https://github.com/${props.githubUser}.png`}
        style={{ borderRadius: "8px" }}
      />{" "}
    </Box>
  );
}
const githubUser = "miguelcutri";
const pessoasFavoritas = [
  "Marcelo7211",
  "codethi",
  "beatrizodorcik",
  "R0queh",
  "LeonardoMFSilva",
  "Wtheodoro",
];
export default function Home() {
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>

        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box><h1 className="title">Bem vindo(a)</h1>
          <OrkutNostalgicIconSet/>
          </Box>
        </div>

        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
          <h2 className="smallTitle">
            Pessoas da comunidade ({pessoasFavoritas.length})
          </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}

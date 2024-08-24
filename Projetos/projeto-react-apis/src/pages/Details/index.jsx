import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import SyncLoader from "react-spinners/SyncLoader";

import { GlobalContext } from "../../contexts/GlobalContext";

import {
  Center,
  BaseStats,
  Card,
  Container,
  Left,
  Move,
  Moves,
  Right,
  Stats,
  Title,
  Top,
  Type,
  Types,
  OfficialImage,
  BgImage,
  Load,
} from "./styled";

import bgCard from "../../assets/bgCard2.png";
import { Menu } from "../../components";

const Details = () => {
  const context = useContext(GlobalContext);
  const { pokemons, getBgCard, getBgType, loading } = context;
  const params = useParams();
  const [total, setTotal] = useState(0);

  const data = pokemons.find((item) => item.id === Number(params.id));

  const getStatsTotal = () => {
    if (data) {
      let value = 0;

      for (let i = 0; i < data.stats.length; i++) {
        value += data.stats[i].base_stat;
      }

      setTotal(value);
    }
  };

  const getProgressBarColor = (value) => {
    if (value < 50) return "#f17829";
    else if (value < 100) return "#f6df02";
    else return "green";
  };

  const getProgressBarWidth = (value, maxValue = 120) => {
    return `${(value / maxValue) * 100}%`;
  };

  useEffect(() => {
    getStatsTotal();
  }, [data]);

  return (
    <>
      <Menu />
      <Container>
        <Title>Detalhes</Title>
        {loading && (
          <Load>
            <SyncLoader color={"white"} size={20} />
          </Load>
        )}
        {!loading && data && (
          <>
            <Card getBgCard={() => getBgCard(data)}>
              <Left>
                <figure className="front">
                  <img src={data.sprites.front_default} alt="" />
                </figure>

                <figure className="back">
                  <img src={data.sprites.back_default} alt="" />
                </figure>
              </Left>

              <Center>
                <h3 className="title">Base stats</h3>

                <BaseStats>
                  {data.stats.map((item, id) => (
                    <Stats
                      key={id}
                      id={id}
                      getProgressBarColor={() =>
                        getProgressBarColor(item.base_stat)
                      }
                      getProgressBarWidth={() =>
                        getProgressBarWidth(item.base_stat)
                      }
                    >
                      <p className="stat_name">{item.stat.name}</p>

                      <p className="stat_value">{item.base_stat}</p>

                      <ProgressBar
                        baseBgColor={"transparent"}
                        completed={item.base_stat}
                        maxCompleted={120}
                        customLabel={" "}
                        height={"10px"}
                        borderRadius={"4px"}
                        className={"stat_bar"}
                        completedClassName={"bar"}
                      />
                    </Stats>
                  ))}
                  <div className="total">
                    <p className="total_name">Total</p>
                    <p className="total_value">{total}</p>
                  </div>
                </BaseStats>
              </Center>

              <Right>
                <Top>
                  <p className="id">
                    #{data.id < 10 ? `0${data.id}` : data.id}
                  </p>
                  <h2 className="title">{data.name}</h2>
                  <Types>
                    {data.types.map((item, id) => (
                      <Type
                        key={id}
                        getBgType={() => getBgType(item.type.name)}
                      ></Type>
                    ))}
                  </Types>
                </Top>

                <Moves>
                  <h3 className="title">Moves:</h3>

                  {!data ? (
                    <p>Carregando...</p>
                  ) : (
                    data.moves.map((item, id) => (
                      <Move key={id}>{item.move.name.replace("-", " ")}</Move>
                    ))
                  )}
                </Moves>
              </Right>

              <OfficialImage>
                <img
                  src={data.sprites.other["official-artwork"].front_default}
                  alt={data.name}
                />
              </OfficialImage>

              <BgImage>
                <img src={bgCard} alt="Imagem de Fundo" />
              </BgImage>
            </Card>
          </>
        )}
      </Container>
    </>
  );
};

export default Details;

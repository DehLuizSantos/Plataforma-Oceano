import React from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onChangeToogle?: () => void;
  toogleIcon: boolean;
};

const ToogleTheme: React.FC<Props> = ({ onChangeToogle, toogleIcon }) => {
  return (
    <S.ToogleThemeContainer>
      <button onClick={onChangeToogle}>
        <FontAwesomeIcon
          icon={toogleIcon ? faMoon : faSun}
          size="1x"
          color={`white`}
        />
      </button>
    </S.ToogleThemeContainer>
  );
};

export default ToogleTheme;

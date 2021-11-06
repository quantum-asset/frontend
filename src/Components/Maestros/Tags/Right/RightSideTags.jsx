import React, { Fragment } from "react";
import Title from "../../../Title/Title";
import ChartAlertaTags from "./ChartAlertaTags";
import TablaAlertaTags from "./TablaAlertaTags";

const RightSideTags = (props) => {
  const { necesidadTags, locaciones } = props;
  return (
    <Fragment>
      <Title smallTitle="Alertas de necesidad de tags" />

      <TablaAlertaTags necesidadTags={necesidadTags} />
      <Title smallTitle="Alertas por Locación" />
      {necesidadTags && locaciones && (
        <ChartAlertaTags necesidadTags={necesidadTags} locaciones={locaciones} />
      )}
    </Fragment>
  );
};
export default RightSideTags;

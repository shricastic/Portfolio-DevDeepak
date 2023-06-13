import React, { ReactElement } from "react";
import AboutSuperGuest from "@components/my-components/Projects/SuperGuest.mdx";
interface Props {}

export default function SuperGuest({}: Props): ReactElement {
  return (
    <div>
      <AboutSuperGuest></AboutSuperGuest>
    </div>
  );
}

import React from "react";
import { useRecoilState } from "recoil";
import { bgatom } from "../../state/bgatom";

export function BackgroundManager() {
  const [bgColor] = useRecoilState(bgatom);
  React.useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);
  return <></>;
}

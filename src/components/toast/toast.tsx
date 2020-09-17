import { AtToast } from "taro-ui"
import React from "react";
import './toast.scss'

export default function Toast(){
  return <AtToast isOpened text="{text}" icon="{icon}"></AtToast>
}

"use client"

import React, { useEffect } from "react"
import { Button } from "./ui/Button"
import { WaitlistDialog } from "./WaitlistDialog"

type TypeOfButtons = 'default' | 'default_orange' | 'secondary' | 'primary' | 'outline'

export default function WaitinglistBtn(props: any) {

  const [ buttonType, setButtonType ] = React.useState<TypeOfButtons>(props.buttonType);
  const [ buttonText, setButtonText ] = React.useState<string>(props.buttonText);
  const [ buttonData, setButtonData ] = React.useState<boolean>(false);

  useEffect(() => {
    if(!buttonType || buttonType.trim() === '') setButtonType('default');
    if(!buttonText || buttonText.trim() === '') setButtonText('Get Started');
    setButtonData(true);

  }, [props.buttonType, props.buttonText, buttonData]);
  
  return (
    <WaitlistDialog 
        trigger={
            ( buttonData ) ?
            <Button size="lg" variant={buttonType}>
                {buttonText}
            </Button>
            :
            <></>
        }
    />
  )
}
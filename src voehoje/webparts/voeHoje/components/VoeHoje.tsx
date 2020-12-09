import * as React from 'react';
import { IVoeHojeProps } from './IVoeHojeProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {FormRegister} from '../components/Form/FormRegister'


export default class VoeHoje extends React.Component<IVoeHojeProps, {}> {
  public render(): React.ReactElement<IVoeHojeProps> {
    return (
       <>
         <FormRegister />
       </>
    );
  }
}


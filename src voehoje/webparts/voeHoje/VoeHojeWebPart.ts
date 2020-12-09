import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'VoeHojeWebPartStrings';
import VoeHoje from './components/VoeHoje';
import { IVoeHojeProps } from './components/IVoeHojeProps';

export interface IVoeHojeWebPartProps {
  description: string;
}

export default class VoeHojeWebPart extends BaseClientSideWebPart<IVoeHojeWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IVoeHojeProps> = React.createElement(
      VoeHoje,
      {
        description: this.properties.description,
        context: this.context

      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

 

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

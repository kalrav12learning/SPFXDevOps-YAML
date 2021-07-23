import * as React from 'react';
import styles from './Solutiondevopstest.module.scss';
import { ISolutiondevopstestProps } from './ISolutiondevopstestProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Solutiondevopstest extends React.Component<ISolutiondevopstestProps, {}> {
  public render(): React.ReactElement<ISolutiondevopstestProps> {
    return (
      <div className="${ styles.solutiondevopstest }">
        <div className="${ styles.container }">
          <div className="${ styles.row }">
            <div className="${ styles.column }">
              <span className="${ styles.title }">Welcome to SharePoint Framework Solution Kalrav!2324q2 992342 534</span>
              <p className="${ styles.subTitle }">Customize SharePoint experiences using web parts.</p>
              <p className="${ styles.description }">${escape(this.props.description)}</p>
              <p className="${ styles.description }">${escape(this.props.test)}</p>
              <p className="${ styles.description }">${this.props.test1}</p>
              <p className="${ styles.description }">${escape(this.props.test2)}</p>
            <p className="${ styles.description }">${this.props.test3}</p>
              <a href="https://aka.ms/spfx" className="${ styles.button }">
                <span className="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

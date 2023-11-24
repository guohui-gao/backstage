export interface Config {
    app: {
      /**
       * Build Version Commit
       * @visibility frontend
       */
      versionCommit: string;
      /**
       * Build Version Branch
       * @visibility frontend
       */
      versionBranch: string;
    };
  }
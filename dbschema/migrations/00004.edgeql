CREATE MIGRATION m15a7uja37aiygdkddnyifospvhetueao7b772jgns7gplnfncfr3a
    ONTO m14r5vv2xdsuzjpvvoozph4t3ahfwd67cfp2vefjz4zia4drqswrga
{
  ALTER TYPE default::Building {
      ALTER PROPERTY name {
          CREATE CONSTRAINT std::exclusive;
      };
      ALTER PROPERTY name {
          SET REQUIRED USING ('building1');
      };
  };
};

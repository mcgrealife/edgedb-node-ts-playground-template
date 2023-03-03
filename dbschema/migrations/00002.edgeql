CREATE MIGRATION m1irkgoziswayw64l57jbmwjexwclyyprjtlvj3bbosy6koo2uwijq
    ONTO m1bccygtvh2jmel3hpvqooaq22yuwyrhu5ilc6cmrsxithnbmtipkq
{
  ALTER TYPE default::Example {
      DROP PROPERTY name;
  };
  ALTER TYPE default::Example RENAME TO default::Product;
  ALTER TYPE default::Product {
      CREATE REQUIRED PROPERTY show_token_amount -> std::bool {
          SET REQUIRED USING (true);
      };
      CREATE REQUIRED PROPERTY token_amount -> std::int32 {
          SET REQUIRED USING (123);
      };
  };
};

CREATE MIGRATION m1xmnylzejfztqadgxau7u3kxisfzcysgzrov6svb3m66unlxp6k2a
    ONTO m1bccygtvh2jmel3hpvqooaq22yuwyrhu5ilc6cmrsxithnbmtipkq
{
  ALTER TYPE default::Example {
      CREATE PROPERTY human -> std::bool;
  };
};

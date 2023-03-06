CREATE MIGRATION m1bccygtvh2jmel3hpvqooaq22yuwyrhu5ilc6cmrsxithnbmtipkq
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Example {
      CREATE PROPERTY name -> std::str;
  };
};

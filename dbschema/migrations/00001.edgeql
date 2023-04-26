CREATE MIGRATION m12p6wvov7mcm3av7e7ro7qku72odwvlz7jsysvkz4qrxslfbwpm5a
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Child {
      CREATE PROPERTY name -> std::str;
  };
  CREATE TYPE default::Parent {
      CREATE MULTI LINK children -> default::Child;
      CREATE PROPERTY name -> std::str;
  };
};

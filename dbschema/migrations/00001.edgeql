CREATE MIGRATION m1drpue4rcxt54vska3r3zoxdaqrwirmkzcxjtaubi7yygvzmhxe2a
    ONTO initial
{
  CREATE FUTURE nonrecursive_access_policies;
  CREATE TYPE default::Parent {
      CREATE PROPERTY name -> array<std::str>;
  };
};

CREATE MIGRATION m1lcg3cj4avisa53z7byh63jyk6ezoqtxfdhuf7wupz6bh52jxtukq
    ONTO m12p6wvov7mcm3av7e7ro7qku72odwvlz7jsysvkz4qrxslfbwpm5a
{
  ALTER TYPE default::Parent {
      DROP LINK children;
  };
  ALTER TYPE default::Child RENAME TO default::Floorplan;
  ALTER TYPE default::Parent RENAME TO default::Building;
  CREATE TYPE default::Unit {
      CREATE LINK floorplan -> default::Floorplan;
      CREATE PROPERTY name -> std::str;
  };
  ALTER TYPE default::Building {
      CREATE MULTI LINK units -> default::Unit;
  };
};

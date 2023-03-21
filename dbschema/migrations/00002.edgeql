CREATE MIGRATION m13hp7p3plmp4wjgxzxfwj5pzutwoa5sjz5yc73g2vzmdkwd3g7cha
    ONTO m12p6wvov7mcm3av7e7ro7qku72odwvlz7jsysvkz4qrxslfbwpm5a
{
  ALTER TYPE default::Parent {
      CREATE PROPERTY age -> std::int16;
  };
};

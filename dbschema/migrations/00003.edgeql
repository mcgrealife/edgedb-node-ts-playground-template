CREATE MIGRATION m14r5vv2xdsuzjpvvoozph4t3ahfwd67cfp2vefjz4zia4drqswrga
    ONTO m1lcg3cj4avisa53z7byh63jyk6ezoqtxfdhuf7wupz6bh52jxtukq
{
  ALTER TYPE default::Floorplan {
      CREATE PROPERTY bedroomCount -> std::int16;
  };
};

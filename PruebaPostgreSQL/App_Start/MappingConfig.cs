
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PruebaPostgreSQL.App_Start
{
    public class MappingConfig
    {
        public static void RegisterMaps()
        {
            AutoMapper.Mapper.Initialize(config =>
            {

            });
        }
    }
}
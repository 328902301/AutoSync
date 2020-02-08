﻿using System.Collections.Generic;
using JetBrains.Annotations;

namespace FilterLists.Services.Language.Models
{
    [UsedImplicitly]
    public class LanguageDto
    {
        public int Id { get; set; }
        public List<int> FilterListIds { get; set; }
        public string Iso6391 { get; set; }
        public string Name { get; set; }
    }
}
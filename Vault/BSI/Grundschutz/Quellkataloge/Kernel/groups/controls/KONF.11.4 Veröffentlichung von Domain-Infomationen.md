---
tags:
- Produktbeschreibung_Data_Leak_Recon
- konf114-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.11.4 Veröffentlichung von Domain-Infomationen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.11.4 - Veröffentlichung von Domain-Infomationen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Data Leak](tags_Data Leak)" "[Recon](tags_Recon)"
Gruppe: [KONF.11 Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md) *** | DNS-Server | SOLLTE | die Veröffentlichung von Domain-Infomationen | anhand von {{Kriterien}} | einschränken | Konfigurationshistorie | >Konfiguration für DNS-Server SOLLTE die Veröffentlichung von Domain-Infomationen anhand von {{ insert: param, konf.11.4-prm1 }} einschränken.

> [!info]- Guidance
>Angreifer nutzen häufig DNS um das Netz zu erkunden (DNS-Reconnaissance). Veröffentlichen Sie Domain-Informationen nur, wenn diese zu einem Dienst gehören, der zur externen Nutzung gedacht ist. Nur intern benötigte DNS-Einträge dagegen bleiben intern.  Kriterien können z.B. Domains oder Subdomain sein (intern.domain.com vs www.domain.com).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 24d7bd4d-9ae9-4871-b6da-4c5186351b46 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 24d7bd4d-9ae9-4871-b6da-4c5186351b46 |

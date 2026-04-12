---
tags:
- produktbeschreibung_data_leak_recon
- konf114-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.11.4 Veröffentlichung von Domain-Infomationen
stmt_target_object_category: DNS-Server
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.11.4 - Veröffentlichung von Domain-Infomationen
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Data Leak|Data Leak]]> [[tags_Recon|Recon]]
Gruppe: [KONF.11 Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Vertrauensbeziehungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.11%20Vertrauensbeziehungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [DNS-Server](target_object_categories_DNS-Server_f88fd07b-f918-45b5-80a5-59fcea43a99c) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Veröffentlichung von Domain-Infomationen | anhand von {{Kriterien}} | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für DNS-Server SOLLTE die Veröffentlichung von Domain-Infomationen anhand von {{ insert: param, konf.11.4-prm1 }} einschränken.</span>

> [!info]- Guidance
>Angreifer nutzen häufig DNS um das Netz zu erkunden (DNS-Reconnaissance). Veröffentlichen Sie Domain-Informationen nur, wenn diese zu einem Dienst gehören, der zur externen Nutzung gedacht ist. Nur intern benötigte DNS-Einträge dagegen bleiben intern.  Kriterien können z.B. Domains oder Subdomain sein (intern.domain.com vs www.domain.com).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 24d7bd4d-9ae9-4871-b6da-4c5186351b46 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 24d7bd4d-9ae9-4871-b6da-4c5186351b46 |

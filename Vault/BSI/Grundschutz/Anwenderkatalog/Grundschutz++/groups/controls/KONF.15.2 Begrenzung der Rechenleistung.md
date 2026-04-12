---
tags:
- produktbeschreibung_phishing_denial_of_service
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.15.2 Begrenzung der Rechenleistung
stmt_modal_verb: KANN
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.15.2 - Begrenzung der Rechenleistung
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Phishing|Phishing]]> [[tags_Denial of Service|Denial of Service]]
Gruppe: [KONF.15 Ressourcenauslastung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.15%20Ressourcenauslastung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Ressourcenauslastung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.15%20Ressourcenauslastung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | Anwendungen, Hostsysteme | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Rechenleistung |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Anwendungen von Hostsystemen KANN die Rechenleistung einschränken.</span>

> [!info]- Guidance
>Kann durch eine Beschränkung der Anzahl verwendeter Rechenkerne, der Rechenleistung pro Rechenkern oder durch eine indirekte Beschränkung (z.B. eine begrenzte Menge an Anfragen oder Eingabetoken) umgesetzt werden. Beispielsweise kann in einem Verzeichnisdienst ein maximaler Schwellwert für die Zeit eingestellt werden, die eine Suchanfrage in Anspruch nehmen darf, um die Auslastung des Verzeichnisdienstes durch einzelne Anfragen nicht zu gefährden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 62f53764-d215-4e55-9ad1-7790922620af |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 62f53764-d215-4e55-9ad1-7790922620af |

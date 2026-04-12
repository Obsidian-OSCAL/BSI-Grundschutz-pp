---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.4.4 Einschränkung von Fernwartungsfunktionen
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.4.4 - Einschränkung von Fernwartungsfunktionen
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.4 Vertrauenswürdige Basisdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Vertrauenswürdige Basisdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Fernwartungsfunktionen | im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE Fernwartungsfunktionen im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement einschränken.</span>

> [!info]- Guidance
>Fernwartungszugänge, etwa über RDP, SNMP oder Anwendungen zur Fernsteuerung des Systems erlauben typischerweise eine Vielzahl von Eingriffen in Systemkonfiguration und Datenverarbeitungen. Beispiele sind die Remote-Zwischenablage und die automatische Einbindung von Peripheriegeräten, Wechseldatenträgern und Netzlaufwerken. Unautorisierte Fernwartungszugänge könnten für Angriffe missbraucht werden. Die Formulierung "im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik Berechtigung (BER) festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 2e782e35-d708-49c3-b022-76616ae204be |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 2e782e35-d708-49c3-b022-76616ae204be |

> [!info]- Links> > related: [BER.1.1 Verfahren und Regelungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.1.1%20Verfahren%20und%20Regelungen.md)

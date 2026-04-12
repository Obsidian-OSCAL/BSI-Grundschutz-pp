---
tags:
- insider_threat
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.4 Revisionssicherheit
stmt_modal_verb: SOLLTE
stmt_action_word: dokumentieren
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.4 - Revisionssicherheit
Tag: [[tags_Insider Threat|Insider Threat]]
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)*<br> *  &rarr; [Protokollierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.3%20Protokollierung.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Änderungen am Audit Log | revisionssicher | [dokumentieren](action_words_dokumentieren_1ed72769-e05f-4a97-ad2e-99a70f1480e8) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion SOLLTE Änderungen am Audit Log revisionssicher dokumentieren.</span>

> [!info]- Guidance
>Wenn die Protokollaufzeichnung unzureichend vor Veränderung geschützt ist, könnten Innentäter diese manipulieren oder löschen, um nicht erkannt oder belangt zu werden. Hierzu gehört auch, dass Administrierende die Protokolldaten zu ihren eigenen Tätigkeiten manipulieren oder löschen könnten. Die Integrität kann durch die Erstellung und getrennte Aufbewahrung von kryptografischen Hashes oder ein Versionskontrollsystem sichergestellt werden. Um sicherzustellen, dass nur autorisierte Personen die Protokolle verändern können, können z.B. Verschlüsselung und getrennte Aufbewahrung des Schlüssels, einmalig beschreibare Datenträger, oder ein Protokollierungsserver/SIEM mit stark eingeschränkten Zugriffsrechten eingesetzt werden. Auch die Aufzeichnung in einer öffentlichen Transparenzdatei ist möglich, wenn die Protokolle keine vertraulichen Daten enthalten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1cd947a7-70a2-41c9-b3fd-90f3ef75838c |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 1cd947a7-70a2-41c9-b3fd-90f3ef75838c |

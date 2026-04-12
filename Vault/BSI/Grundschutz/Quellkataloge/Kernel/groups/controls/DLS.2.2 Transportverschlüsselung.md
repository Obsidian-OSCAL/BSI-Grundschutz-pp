---
tags:
- lieferketten
- dls22-prm1
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DLS.2.2 Transportverschlüsselung
stmt_target_object_category: Daten
stmt_modal_verb: SOLLTE
stmt_action_word: verschlüsseln
stmt_documentation: Konfigurationshistorie
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DLS.2.2 - Transportverschlüsselung
Tag: [[tags_Lieferketten|Lieferketten]]
Gruppe: [DLS.2 Nutzung von digitalen Dienstleistungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DLS.2%20Nutzung%20von%20digitalen%20Dienstleistungen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Dienstleistersteuerung (DLS)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DLS%20Dienstleistersteuerung.md)*<br> *  &rarr; [Nutzung von digitalen Dienstleistungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DLS.2%20Nutzung%20von%20digitalen%20Dienstleistungen.md) *</div> | [Dienstleistersteuerung](practices_Dienstleistersteuerung_1291637b-aa0e-4b80-a309-5aca40e1c01b) | [Daten](target_object_categories_Daten_69d48234-d4c2-463d-9b76-c3a1580edd85) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | den Transport | bei der Übertragung zum Anbieter nach {{einem anerkannten Standard}} | [verschlüsseln](action_words_verschlüsseln_4dc9ef92-2124-449a-9a99-61095d271599) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Dienstleistersteuerung für Daten SOLLTE den Transport bei der Übertragung zum Anbieter nach {{ insert: param, dls.2.2-prm1 }} verschlüsseln.</span>

> [!info]- Guidance
>„Transport“ bedeutet hier der technische Vorgang der Datenübertragung zwischen der Institution und dem Dienstleister, also etwa über das Internet oder dedizierte Leitungen. Der Sinn dieser Vorschrift liegt darin, die Vertraulichkeit und Integrität von Informationen zu schützen, wenn sie in fremde Infrastrukturen überführt werden. Ohne eine solche Maßnahme könnte ein Angreifer Daten während der Übertragung abfangen oder manipulieren, beispielsweise über „Man-in-the-Middle“-Angriffe oder durch Abhören unsicherer Netze. Da beschaffte Dienstleistungen typischerweise außerhalb der direkten Kontrolle der Institution liegen, gibt es hier eine eigene Vorgabe, um die besondere Risikosituation beim Übergang von interner zu externer Infrastruktur gezielt abzusichern. Eine Institution kann die Anforderung praktisch umsetzen, indem sie (1) den Einsatz von Protokollen wie TLS in allen Web- und API-basierten Schnittstellen zum Anbieter sicherstellt, (2) für administrative Zugänge oder besonders sensible Datenübertragungen zusätzlich VPN-Verbindungen nutzen kann, und (3) Zertifikatsprüfungen so konfiguriert, dass unsichere oder abgelaufene Zertifikate nicht akzeptiert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | c9cd4b7e-8f76-4884-afb7-dcfd3d228624 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | c9cd4b7e-8f76-4884-afb7-dcfd3d228624 |

> [!info]- Links> > related: [BES.4.6.2 Verschlüsselung durch den Anbieter](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BES.4.6.2%20Verschlüsselung%20durch%20den%20Anbieter.md)

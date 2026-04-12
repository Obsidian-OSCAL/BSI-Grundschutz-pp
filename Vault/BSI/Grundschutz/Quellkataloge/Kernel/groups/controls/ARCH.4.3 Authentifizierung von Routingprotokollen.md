---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.4.3 Authentifizierung von Routingprotokollen
stmt_target_object_category: Netze
stmt_modal_verb: SOLLTE
stmt_action_word: authentifizieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.4.3 - Authentifizierung von Routingprotokollen
Gruppe: [ARCH.4 Zugangsbeschränkungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.4%20Zugangsbeschränkungen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Architektur (ARCH)](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH%20Architektur.md)*<br> *  &rarr; [Zugangsbeschränkungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/ARCH.4%20Zugangsbeschränkungen.md) *</div> | [Architektur](practices_Architektur_6710c63e-bb40-4742-9bae-1779ba21f2a9) | [Netze](target_object_categories_Netze_1a4fb57d-1648-4111-979d-6a5f4f848620) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Änderungen an Routing-Tabellen | im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements | [authentifizieren](action_words_authentifizieren_8e423108-c6dd-41fd-8104-e9221bd9d085) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Architektur für Netze SOLLTE Änderungen an Routing-Tabellen im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements authentifizieren.</span>

> [!info]- Guidance
>Hierzu zählt z.B. die Authentifizierung von BGP/OSPF-Sitzungen zur Verhinderung von Route Hijacking, BGP origin validation with RPKI oder OSPF/ISIS/BGP MD5 or TTL+hMAC authentication. Die Formulierung "im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik IDM festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 739ad3ad-cbbc-4809-9f20-1c59e85c864b |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 739ad3ad-cbbc-4809-9f20-1c59e85c864b |

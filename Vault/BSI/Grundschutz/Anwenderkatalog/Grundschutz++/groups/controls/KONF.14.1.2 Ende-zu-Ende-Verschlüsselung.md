---
tags:
- produktbeschreibung_cryptography_zero_trust
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.14.1.2 Ende-zu-Ende-Verschlüsselung
parent_control: KONF.14.1 Verschlüsselung beim Transport
stmt_target_object_category: Anwendungen
stmt_modal_verb: KANN
stmt_action_word: verschlüsseln
stmt_documentation: Konfigurationshistorie
control_effort_level: '5'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.14.1.2 - Ende-zu-Ende-Verschlüsselung
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Cryptography|Cryptography]]> [[tags_Zero_Trust|Zero Trust]]
Gruppe: [KONF.14 Verteilte Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.14%20Verteilte%20Anwendungen.md)
---

** Übergeordnetes Control: ** [KONF.14.1 Verschlüsselung beim Transport](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.14.1%20Verschlüsselung%20beim%20Transport.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Verteilte Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.14%20Verteilte%20Anwendungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [KANN](modal_verbs_KANN_1c941e58-72a5-4633-8cca-8efad571932b) | die Kommunikation Ende-zu-Ende | über Netze | [verschlüsseln](action_words_verschlüsseln_4dc9ef92-2124-449a-9a99-61095d271599) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Anwendungen KANN die Kommunikation Ende-zu-Ende über Netze verschlüsseln.</span>

> [!info]- Guidance
>Eine Ende-zu-Ende-Verschlüsselung stellt sicher, dass auch Server auf dem Weg zwischen den Endpunkten die Kommunikation nicht auslesen können. Die Unterstützung von Ende-zu-Ende-Verschlüsselung unterscheidet sich zwischen verschiedenen Kommunikationsanwendungen noch immer erheblich: Viele E-Mail-Server verschlüsseln gar nicht oder nur bei Verwendung spezieller Erweiterungen so, während viele Messenger-Apps die Ende-zu-Ende-Verschlüsselung ohne Nutzerinteraktion automatisch erzwingen. Dies kann je nach Anwendung z.B. mittels OpenPGP, S/MIME oder Signal Protocol geschehen. Für aktuelle Verschlüsselungsverfahren siehe BSI TR-02102. Für weitere Details zur Telekommunikation siehe "Kompendium für organisationsinterne Telekommunikationssysteme mit erhöhtem Schutzbedarf".

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 3e17d0bd-cdec-4d89-b6a6-b2e018009e8f |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 3e17d0bd-cdec-4d89-b6a6-b2e018009e8f |

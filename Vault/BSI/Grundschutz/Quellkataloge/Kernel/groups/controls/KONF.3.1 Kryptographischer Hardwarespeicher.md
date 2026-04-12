---
tags:
- produktbeschreibung_cryptography
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.3.1 Kryptographischer Hardwarespeicher
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: aktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.3.1 - Kryptographischer Hardwarespeicher
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Cryptography|Cryptography]]
Gruppe: [KONF.3 Physischer Schutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.3%20Physischer%20Schutz.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Physischer Schutz](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.3%20Physischer%20Schutz.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | einen kryptographischen Hardwarespeicher |  | [aktivieren](action_words_aktivieren_4d9da359-34e9-41b2-b198-ed53920a0414) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE einen kryptographischen Hardwarespeicher aktivieren.</span>

> [!info]- Guidance
>Ein kryptographischer Hardwarespeicher bezeichnet in diesem Kontext eine gesicherte, hardwarebasierte Komponente, die kryptographische Schlüssel oder andere besonders sensible Geheimnisse in einer isolierten und manipulationsgeschützten Umgebung verwahrt. Der Einsatz solcher Speicher kann das Risiko deutlich reduzieren, dass kryptographische Schlüssel bei einem Softwareangriff kompromittiert werden, und kann gleichzeitig die Integrität sicherheitskritischer Prozesse wie Verschlüsselung, Signatur oder Authentifizierung erhöhen. Als Standards können hierzu etwa eine Trusted Execution Environment (TEE), Secure Elements (SE) or Dedicated Security Components (DSC) infrage kommen. Vgl. ISO/IEC 11889 (TPM 2.0), ISO/IEC 19790 / FIPS 140-3 oder ETSI EN 303 645 (für IoT).

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5c63c101-f2d6-479c-963c-0280bd2fb8a7 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 5c63c101-f2d6-479c-963c-0280bd2fb8a7 |
